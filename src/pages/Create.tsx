import { Container } from "react-bootstrap";
import Form from "../components/Form";
import { NoteData, Tag } from "../types";

export type CreateProps = {
  handleSubmit: (data: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

const Create = ({ handleSubmit, availableTags, createTag }: CreateProps) => {
  return (
    <Container className="py-5">
      <h2>Yeni Not Oluştur</h2>
      <Form
        createTag={createTag}
        handleSubmit={handleSubmit}
        availableTags={availableTags}
      />
    </Container>
  );
};

export default Create;
