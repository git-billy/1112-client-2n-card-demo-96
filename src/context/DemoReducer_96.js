const DemoReducer_96 = (state, action) => {
  if (action.type === "GET_BLOGS_SUPABASE_SUCCESS") {
    return { ...state, blogs: action.payload };
  }
};

export default DemoReducer_96;
