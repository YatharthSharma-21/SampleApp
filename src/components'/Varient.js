import React, { setState, useState } from "react";
import Table from './Table.js'

let initialState = [
  {
    id: 1,
    name: "",
    type: "DropDown",
    default: "",
    values: [""],
  },
  
];

const Varient = () => {
  const [DATA, setData] = useState(initialState);
  const [showtable, showTableD] = useState(false);

  const handleChange = (e, id, index) => {
    let { value, name } = e.target;
    let ind = DATA.findIndex((item) => item.id == id);
    if (ind != -1) {
      let newData = [...DATA];
      if (index!=undefined) {
        let newvals=[...newData[ind]["values"]]
        newvals.splice(index, 1, value );
        newData.splice(ind, 1, { ...newData[ind],values: newvals });
       // newData[ind]["values"][index] = value;
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
      type: "DropDown",
      default: "",
      values: [""],
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

  const showTable = () =>{
    showTableD(true)
  }
  return (
    <div className="container">
      <div className="col-sm-12">
        <h1>Variants</h1>
        <p>Add variants</p>
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
                    if (index > 0) {
                      return (
                        <>
                          <div className="col-sm-6"></div>
                          <div class="form-group col-sm-6 row m-0">
                            <div className="col-sm-8">
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
                            <div class="form-group form-check col-sm-4">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="exampleCheck1"
                                checked={item.default === "yes" ? true : false}
                              />
                              <label class="form-check-label" for="exampleCheck1">
                                Default
                              </label>
                            </div>
                          </div>
                        </>
                      );
                    } else {
                      return (
                        <div class="form-group col-sm-6 row m-0">
                          <div className="col-sm-8">
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
                          <div class="form-group form-check col-sm-4">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck1"
                              checked={item.default === "yes" ? true : false}
                            />
                            <label class="form-check-label" for="exampleCheck1">
                              Default
                            </label>
                          </div>
                        </div>
                      );
                    }
                  })}
              </>

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
      <button
        type="button"
        class="btn btn-success float-right"
        onClick={() => {
          showTable();
        }}
      >
        Create
      </button>
      {DATA && showtable && <Table data={DATA}></Table>}
    </div>
  );
};

export default Varient;
