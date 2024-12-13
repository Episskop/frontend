import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Apartment } from "@/components/Portfolio/Apartment/Apartment";
import { Villa } from "@/components/Portfolio/Villa/Villa";
import createPropertyData from "@/API/Api";

interface PropertyContextProps {
  apartmentData: Apartment[];
  villaData: Villa[];
}

const PropertyContext = createContext<PropertyContextProps | undefined>(undefined);

export const usePropertyData = () => {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('usePropertyData must be used within a PropertyProvider');
  }
  return context;
};

export const PropertyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [apartmentData, setApartmentData] = useState<Apartment[]>([]);
  const [villaData, setVillaData] = useState<Villa[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createPropertyData();
        setApartmentData(data.apartmentData);
        setVillaData(data.villaData);
      } catch (err) {
        console.error('Failed to fetch data', err);
      }
    };

    fetchData();
  }, []);

  return (
    <PropertyContext.Provider value={{ apartmentData, villaData }}>
      {children}
    </PropertyContext.Provider>
  );
};
