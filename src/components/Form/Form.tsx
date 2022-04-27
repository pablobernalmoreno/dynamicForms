import React, { useState } from "react";
import "./Form.css";

interface FormProps {
  attributes: Array<Attribute>;
}

interface Attribute {
  code: string;
  dataType: string;
}

/**
 * Renders form with dynamic inputs
 */

export const Form = ({ attributes }: FormProps) => {
  /**
   * State manager for the input fields values
   */
  const [inputValues, setInputValues] = useState({});

  /**
   * Function to handle any changes in the input fields
   */
  const handleChange = ({ target: { name, value } }: any) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  /**
   * @param attribute of type Attribute
   * @returns React element based on the attribute data type
   */
  const attributeMapping = (attribute: Attribute) => {
    switch (attribute.dataType) {
      case "string":
        return (
          <input
            className="input-fields"
            name={attribute.code}
            placeholder={attribute.code.toUpperCase()}
            type={"string"}
            onChange={handleChange}
          />
        );
      case "email":
        return (
          <input
            className="input-fields"
            name={attribute.code}
            placeholder={attribute.code.toUpperCase()}
            type={"email"}
            onChange={handleChange}
          />
        );
      case "date":
        return (
          <input
            className="input-fields"
            name={attribute.code}
            placeholder={attribute.code.toUpperCase()}
            type={"date"}
            onChange={handleChange}
          />
        );

      default:
        break;
    }
  };

  return (
    <>
      <h1>Formulario</h1>
      <form className="form-container">
        {attributes.map((attribute: Attribute) => attributeMapping(attribute))}
      </form>
    </>
  );
};

