import { Formik } from "formik";

export function Form({ handleNext }) {
  return (
    <div>
      <h1>Chess</h1>
      <Formik
        initialValues={{ size: 0, steps: 0 }}
        onSubmit={(values) => handleNext(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ marginRight: "10px" }}>
                <h4>Chess board size (nxn)</h4>
              </div>
              <input
                type="number"
                name="size"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.size}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ marginRight: "10px" }}>
                <h4>Chess board size (nxn)</h4>
              </div>
              <input
                type="number"
                name="steps"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.steps}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
