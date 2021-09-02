import React, { setState, useState } from "react";

let initialState = [
  {
    id: 1,
    name: "",
    type: "",
    default: "",
    values: ["yelllow"],
  },
  {
    id: 2,
    name: "",
    type: "",
    default: "",
    values: ["red"],
  },
];

const Varient = () => {
  const [DATA, setData] = useState(initialState);

  const handleChange = (e, id, index) => {
    let { value, name } = e.target;
    let ind = DATA.findIndex((item) => item.id == id);
    if (ind != -1) {
      let newData = [...DATA];
      if (index) {
        newData[ind]["values"][index] = value;
      } else {
        newData.splice(ind, 1, { ...newData[ind], [name]: value });
      }

      setData(newData);
    }
  };

  const addVarient = () => {
    let lId = DATA[DATA.length - 1].id;
    let data = {
      id: lId + 1,
      name: "",
      type: "",
      default: "",
      values: ["red"],
    };

    setData([...DATA, data]);
  };

  const addValue = (e, id) => {
    let name = "values";
    let ind = DATA.findIndex((item) => item.id == id);
    if (ind != -1) {
      let newData = [...DATA];
      let values = [...DATA[ind]["values"], ""];
      console.log(values);
      newData.splice(ind, 1, { ...newData[ind], [name]: values });
      setData(newData);
    }
  };

  const deleteValue = (e, id, index) => {
    let name = "values";
    let ind = DATA.findIndex((item) => item.id == id);
    if (ind != -1) {
      let newData = [...DATA];
      DATA[ind]["values"][index].delete();
      let values = [...DATA[ind]["values"]];
      console.log(values);
      newData.splice(ind, 1, { ...newData[ind], [name]: values });
      setData(newData);
    }
  };
  return (
    <div className="container">
      <div className="col-sm-12">
        <h1>Varients</h1>
        <p>Add varients</p>
      </div>
      {DATA &&
        DATA.map((item) => {
          return (
            <div className="row">
              <div class="form-group col-sm-3">
                <label>Name</label>
                <input
                  onChange={(e) => {
                    handleChange(e, item.id);
                  }}
                  type="text"
                  class="form-control"
                  name="name"
                  value={item.name}
                />
              </div>
              <div class="form-group col-sm-3">
                <label>option</label>
                <select
                  type="text"
                  class="form-control"
                  name="type"
                  onChange={(e) => {
                    handleChange(e, item.id);
                  }}
                >
                  <option
                    selected={item.optionVal === "DropDown" ? true : false}
                  >
                    DropDown
                  </option>
                  <option
                    selected={item.optionVal === "RadioButton" ? true : false}
                  >
                    RadioButton
                  </option>
                </select>
              </div>
              <>
                {item &&
                  item.values.map((val, index) => {
                    return (
                      <div class="form-group col-sm-3">
                        <label>Value</label>
                        <input
                          type="text"
                          onChange={(e) => {
                            handleChange(e, item.id, index);
                          }}
                          class="form-control"
                          value={val}
                        />
                        {item.values.length > 1 && index > 0 ? (
                          <>
                            <small
                              onClick={(e) => {
                                deleteValue(e, item.id, index);
                              }}
                              style={{ cursor: "pointer" }}
                              class="form-text text-muted"
                            >
                              Delete
                            </small>
                            <small
                              onClick={(e) => {
                                addValue(e, item.id);
                              }}
                              style={{ cursor: "pointer" }}
                              class="form-text text-muted"
                            >
                              Add Value
                            </small>
                          </>
                        ) : index == 0 ? (
                          <small
                            onClick={(e) => {
                              addValue(e, item.id);
                            }}
                            style={{ cursor: "pointer" }}
                            class="form-text text-muted"
                          >
                            Add Value
                          </small>
                        ) : (
                          <small
                            onClick={(e) => {
                              deleteValue(e, item.id);
                            }}
                            style={{ cursor: "pointer" }}
                            class="form-text text-muted"
                          >
                            Delete
                          </small>
                        )}
                      </div>
                    );
                  })}
              </>
              <div class="form-group form-check col-sm-3">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  checked={item.default === "yes" ? true : false}
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
            </div>
          );
        })}
      <button
        type="button"
        class="btn btn-success"
        onClick={() => {
          addVarient();
        }}
      >
        Add Varient
      </button>
    </div>
  );
};

export default Varient;
