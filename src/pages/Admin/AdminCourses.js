import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";

import axios from "axios";
import TextArea from "antd/es/input/TextArea";

function AdminCourses() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { courses } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
    // const tempTechnologies=values.technologies.split(",");
    // values.technologies=tempTechnologies;
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-course", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-course", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModel(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-course", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white "
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(true);
          }}
        >
          Add course
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {courses.map((course) => (
          <div
            key={course.id}
            className="shadow border p-5 border-gray-400 flex-col "
          >
            <h1 className="text-primary text-xl font-bold ">
              {course.period}
            </h1>
            <hr />
            <img src={course.image} alt="" className="h-60 w-80" />
            <h1>role: {course.title}</h1>
            <h1>Description : {course.description}</h1>
            <h1>tech : {course.technologies}</h1>
            <div className="flex justify-end gap-5 mt-5 ">
              <button
                className="bg-secondary text-white px-5 py-2 "
                onClick={() => {
                  onDelete(course);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2 "
                onClick={() => {
                  setSelectedItemForEdit(course);
                  setShowAddEditModel(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModel}
          title={setSelectedItemForEdit ? "Edit experience" : "add experience"}
          footer={null}
          onCancel={() => {
            setShowAddEditModel(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            // initialValues={
            //   {
            //     ...selectedItemForEdit,
            //     technologies: selectedItemForEdit?.technologies.join(" , "),
            //   } || {}
            // }
          >
            <Form.Item name="title" label="title">
              <input type="text" placeholder="title" />
            </Form.Item>
            <Form.Item name="image" label="image">
              <input type="text" placeholder="image" />
            </Form.Item>
            <Form.Item name="description" label="description">
              <textarea type="text" placeholder="description" />
            </Form.Item>
            <Form.Item name="link" label="link">
              <input type="text" placeholder="link" />
            </Form.Item>
           

            <div className="flex justify-end">
              <button
                className="bg-secondary text-white px-5 py-2 "
                onClick={() => {
                  setShowAddEditModel(false);
                  setSelectedItemForEdit(null);
                }}
              >
                cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminCourses;
