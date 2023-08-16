// "use client";

// import { useState, createContext } from "react";

// interface LangContextType {
//     language: string | null,
//     setLanguage: Dispatch<SetStateAction<LangContextType>>
// }

// const LangContext = createContext<LangContextType | null>(null);

// const LangProvider = ({ children }: { children: React.ReactNode }) => {
//   const [language, setLanguage] = useState<LangContextType>(null);

//   return (
//     <LangContext.Provider value={{language, setLanguage}}>
//       {children}
//     </LangContext.Provider>
//   );
// };

// export default LangProvider;
