import { Field,Form, Formik } from "formik";

const Search = ({search}) => {
  return (
    <div className=" d-flex justify-content-center">
      <Formik initialValues={{search: ""}} onSubmit={search}>
        <Form>
        <Field className="m-2" type="text" name="search" placeholder="trouver un pokemon" />
        <button className="btn btn-warning m-2" type="submit" >rechercher</button>
      </Form>
      </Formik>
    </div>
  );
};

export default Search


