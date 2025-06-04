
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container mt-5 bg-light" style={{ minHeight: "100vh" }}>
		<div className="text-center  titulo-barberia">
			<h1> Sala De Bellaza/ Barberia</h1>
			 <img
        src="https://images.unsplash.com/photo-1578390432942-d323db577792?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Barbería"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
      />
		</div>
		</div>
	);
}; 