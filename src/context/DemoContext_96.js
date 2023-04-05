import React, { useContext, useReducer, useEffect } from "react";

import DemoReducer_96 from "./DemoReducer_96";

import { supabase } from "../db/clientSupabase";

const initialState = {
  pName: "Billy",
  pId: "210410696",
  blogs: [],
};

const DemoContext_96 = React.createContext();

const DemoProvider_96 = ({ children }) => {
  const [state, dispatch] = useReducer(DemoReducer_96, initialState);

  const fetchBlogDataFromSupabase = async () => {
    try {
      // const results = await axios.get(api_url);
      // console.log("results", results);
      // setData(results.data);

      let { data, error } = await supabase.from("card_96").select("*");
      // setData(data);
      // console.log("data", data);
      dispatch({ type: "GET_BLOGS_SUPABASE_SUCCESS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogDataFromSupabase();
  }, []);

  return (
    <DemoContext_96.Provider value={{ ...state }}>
      {children}
    </DemoContext_96.Provider>
  );
};

const useDemoContext_96 = () => {
  return useContext(DemoContext_96);
};

export { DemoProvider_96, useDemoContext_96 };
