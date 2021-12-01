import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import CustomAppBar from "../components/CustomAppBar";
import CustomCard from "../components/CustomCard";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const para = {
    height: "75vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  useEffect(() => {
    async function getVideos() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/videos`, 
      
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setVideos(data);
    }
    getVideos();
  }, []);
  return (
    <div>
      <CustomAppBar
        isSearchVisible={true}
        onSearch={(event) => {
          setSearchText(event.target.value);
        }}
      />
      {videos.length === 0 ? (
        /* <p style={para}>Loading ....</p> */
        <p style={para}>
          <Spinner
            animation="border"
            variant="light"
            className="my-auto mx-auto"
          />
        </p>
      ) : (
        <Row xs={1} md={4} className="g-4">
          {videos
            .filter((e) =>
              searchText.length === 0
                ? true
                : e.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((e) => (
              <CustomCard
                key={videos.indexOf(e)}
                title={e.title}
                npm
                image={e.image}
                uploadedAgo={e.uploadedAgo}
                uploadedBy={e.uploadedBy}
                views={e.views}
              />
            ))}
        </Row>
      )}
    </div>
  );
};

export default Home;
