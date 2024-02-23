import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";

import axios from "axios";

function AdminExp() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type,setType]=React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let  response ;
      if(selectedItemForEdit){
        response=await axios.post("/api/portfolio/update-experience",{
            ...values,
            _id:selectedItemForEdit._id,
        });
      }else{

          response= await axios.post(
            "/api/portfolio/add-experience",
            values
          );
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

  const onDelete=async(item)=>{
    try{
        dispatch(ShowLoading());
        const response=await axios.post("/api/portfolio/delete-experience",{
            _id:item._id,
        });
        dispatch(HideLoading());
        if(response.data.success){
            message.success(response.data.message);
            dispatch(HideLoading());
            dispatch(ReloadData(true));

        }else{
            message.error(response.data.message);
        }

    }catch(error){
        dispatch(HideLoading());
        message.error(error.message)
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
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="shadow border p-5 border-gray-400 flex-col "
          >
            <h1 className="text-primary text-xl font-bold ">
              {experience.period}
            </h1>
            <hr />
            <h1>company: {experience.company}</h1>
            <h1>Title: {experience.title}</h1>
            <h1>Description : {experience.description}</h1>
            <div className="flex justify-end gap-5 mt-5 ">
              <button className="bg-secondary text-white px-5 py-2 "
              onClick={()=>{
                onDelete(experience)
              }}>
                Delete
              </button>
              <button className="bg-primary text-white px-5 py-2 " 
              onClick={()=>{
                setSelectedItemForEdit(experience);
                setShowAddEditModel(true);
                setType("edit")
              }}>Edit</button>
            </div>
          </div>
        ))}
      </div>

     {
       ( type==="add" || selectedItemForEdit ) &&  <Modal
        visible={showAddEditModel}
        title={setSelectedItemForEdit ? "Edit experience" : "add experience"}
        footer={null}
        onCancel={() => {
          setShowAddEditModel(false);
          setSelectedItemForEdit(null);
        }}
      >
        <Form layout="vertical" onFinish={onFinish}
        initialValues={selectedItemForEdit}>
          <Form.Item name="period" label="period">
            <input type="text" placeholder="Period" />
          </Form.Item>
          <Form.Item name="company" label="company">
            <input type="text" placeholder="company" />
          </Form.Item>
          <Form.Item name="title" label="title">
            <input type="text" placeholder="title" />
          </Form.Item>
          <Form.Item name="description" label="description">
            <input type="text" placeholder="description" />
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
        }
    </div>
  );
}

export default AdminExp;
