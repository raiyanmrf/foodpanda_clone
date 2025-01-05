export const handleUserDataDuringLogin = async (setNavbarUsername) => {
  try {
    const response = await axios.get(
      "https://restaurant-server-ni4y.onrender.com/profile",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log("response", response);
    if (response.data.success) {
      setNavbarUsername(response.data.user.username);
    } else if (!response.data.success) {
      alert(response.data.message);
    }
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    alert(
      error.response?.data?.message ||
        "An error occurred during retreiving user data."
    );
  }
};
