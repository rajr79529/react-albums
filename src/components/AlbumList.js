import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap";

const AlbumList = ({ albums, handleDeleteAlbum, handleEditAlbum }) => {
  return (
    <div className="album py-5 bg-light">
      <Container>
        <Row>
          {albums?.map((album, key) => {
            return (
              <Col md="4" key={key}>
                <Card className="mb-4 box-shadow">
                  <CardImg
                    top
                    width="100%"
                    src="albums.webp"
                    alt={album.title}
                  />
                  <CardBody>
                    <CardText>
                      <span id="title">{album.title}</span>
                    </CardText>
                    <ButtonGroup className="d-flex justify-content-between align-items-center">
                      <Button
                        outline
                        color="primary"
                        size="sm"
                        onClick={() => handleEditAlbum(album)}
                      >
                        Edit
                      </Button>
                      <Button
                        color="danger"
                        size="sm"
                        outline
                        onClick={() => {
                          handleDeleteAlbum(album.id);
                        }}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default AlbumList;
