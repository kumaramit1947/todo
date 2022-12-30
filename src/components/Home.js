import Main001 from "./components001/Main001";
const Home = () => {
    return (

        <div id="home">
            <h2 id="title">
                <span className="titleLogo"><i className="fas fa-tasks"></i></span>
                <span>To Do List</span></h2>
            <div className="main">
                <Main001 />
            </div>
        </div>
        

    );
}
export default Home;