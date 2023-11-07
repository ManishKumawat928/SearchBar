import React, { useEffect, useState } from "react";
import SearchFilter from "react-filter-search";

// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  ListGroup,
} from "react-bootstrap";

let data = [
  {
    id: 1,
    title: "Manish kumar",
  },
  {
    id: 2,
    title: "Rahul Prajapati",
  },
  {
    id: 3,
    title: "Mayank kumar",
  },
  {
    id: 4,
    title: "Jyoti prajapti",
  },
  {
    id: 5,
    title: "Sanju Bhai",
  },
  {
    id: 6,
    title: "Prashant prajapt",
  },
  {
    id: 7,
    title: "Seema Devi",
  },
  {
    id: 8,
    title: "Tara Didi",
  },
  {
    id: 9,
    title: "Sejal Didi",
  },
];

const SearchList = () => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);
  return (
    <div className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={4} className="mb-3 mx-auto">
          <InputGroup className="mb-3">
            <InputGroup.Text>🔍</InputGroup.Text>
            <FormControl
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col xs={12} lg={10}>
          <SearchFilter
            value={searchInput}
            data={data}
            renderResults={(results) => (
              <ListGroup>
                {results.map((item) => (
                  <ListGroup.Item className="mb-1">{item.title}</ListGroup.Item>
                ))}
              </ListGroup>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SearchList;
