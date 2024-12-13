import axios from "axios";
import { Apartment } from "../components/Portfolio/Apartment/Apartment";
import { Villa } from "../components/Portfolio/Villa/Villa";

const API_BASE_URL = "https://maro.itm-studios.com/api/v1/projects";

// Определяем интерфейсы для API
interface Project {
  id: number;
  hero_title: string;
  hero_title_en: string;
  address: string;
  address_en: string;
  square: number;
  description: string;
  description_en: string;
  title: string;
  title_en: string;
  image_hero: string;
  title_hero_img: string;
  photo_project: Array<{
    image_preview: string;
    title: string;
    title_en: string;
  }>;
  photo_project_gallery: string[];
  slug: string;
  categories: Array<{
    slug: string;
  }>;
}

interface ApiResponse {
  results: Project[];
}

// Получение деталей проекта
const fetchProjectDetails = async (slug: string): Promise<Project> => {
  const response = await axios.get<Project>(`${API_BASE_URL}/${slug}/`);
  return response.data;
};

// Получение всех данных с API
const fetchData = async (): Promise<Project[]> => {
  const response = await axios.get<ApiResponse>(`${API_BASE_URL}/?limit=100`);
  return response.data.results;
};

// Преобразование данных в объект Apartment
const transformToApartment = (data: Project): Apartment => {
  return {
    id: data.id,
    residentialComplex: data.hero_title,
    residentialComplex_eng: data.hero_title_en,
    address: data.address,
    address_eng: data.address_en,
    sizeSquareMeters: data.square,
    description: data.description,
    description_eng: data.description_en,
    heading: data.title,
    heading_eng: data.title_en,
    photoUrl: data.image_hero,
    title: data.image_hero || "",
    about: data.title_hero_img,
    illustration_1: data.photo_project?.[0]?.image_preview || "",
    illustration_1_text: data.photo_project?.[0]?.title || "",
    illustration_1_text_eng: data.photo_project?.[0]?.title_en || "",
    illustration_2: data.photo_project?.[1]?.image_preview || "",
    illustration_2_text: data.photo_project?.[1]?.title || "",
    illustration_2_text_eng: data.photo_project?.[1]?.title_en || "",
    illustration_3: data.photo_project?.[2]?.image_preview || "",
    illustration_3_text: data.photo_project?.[2]?.title || "",
    illustration_3_text_eng: data.photo_project?.[2]?.title_en || "",
    project_galore: data.photo_project_gallery || [],
    url: data.slug || "",
    type: data.categories[0]?.slug || "",
  };
};

// Преобразование данных в объект Villa
const transformToVilla = (data: Project): Villa => {
  return {
    id: data.id,
    residentialComplex: data.hero_title,
    residentialComplex_eng: data.hero_title_en,
    address: data.address,
    address_eng: data.address_en,
    sizeSquareMeters: data.square,
    description: data.description,
    description_eng: data.description_en,
    heading: data.title,
    heading_eng: data.title_en,
    photoUrl: data.image_hero,
    title: data.image_hero || "",
    about: data.title_hero_img,
    illustration_1: data.photo_project?.[0]?.image_preview || "",
    illustration_1_text: data.photo_project?.[0]?.title || "",
    illustration_1_text_eng: data.photo_project?.[0]?.title_en || "",
    illustration_2: data.photo_project?.[1]?.image_preview || "",
    illustration_2_text: data.photo_project?.[1]?.title || "",
    illustration_2_text_eng: data.photo_project?.[1]?.title_en || "",
    illustration_3: data.photo_project?.[2]?.image_preview || "",
    illustration_3_text: data.photo_project?.[2]?.title || "",
    illustration_3_text_eng: data.photo_project?.[2]?.title_en || "",
    project_galore: data.photo_project_gallery || [],
    url: data.slug || "",
    type: data.categories[0]?.slug || "",
  };
};

// Создание данных для отображения
export const createPropertyData = async () => {
  const data = await fetchData();
  const apartmentData: Apartment[] = [];
  const villaData: Villa[] = [];

  const detailedProjects = await Promise.all(
    data.map(async (item: Project) => {
      const details = await fetchProjectDetails(item.slug);
      return details;
    })
  );

  detailedProjects.forEach((item: Project) => {
    if (item.categories && item.categories[0]) {
      if (item.categories[0].slug === "apartments") {
        apartmentData.push(transformToApartment(item));
      } else if (item.categories[0].slug === "villas") {
        villaData.push(transformToVilla(item));
      }
    }
  });

  return { apartmentData, villaData };
};

export default createPropertyData;
