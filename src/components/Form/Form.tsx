import React from "react";
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
          />
        );
      case "email":
        return (
          <input
            className="input-fields"
            name={attribute.code}
            placeholder={attribute.code.toUpperCase()}
            type={"email"}
          />
        );
      case "date":
        return (
          <input
            className="input-fields"
            name={attribute.code}
            placeholder={attribute.code.toUpperCase()}
            type={"date"}
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
