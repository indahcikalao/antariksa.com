import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Divider,
  Container,
  Button,
} from "@mui/material";
import "./BuyerProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/actions/authActions";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router";

function FormEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState(``);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      gender,
      phone,
    };
    dispatch(
      editUser(data, (status) => {
        if (status === 201) {
          navigate("/buyer-profile");
        }
      })
    );
  };

  useEffect(() => {
    if (user) {
      user.name && setName(user.name);
      user.phone && setPhone(user.phone);
      user.gender && setGender(user.gender);
    }
  }, [user]);

  return (
    <div
      className="app"
      style={{ backgroundImage: `url('./img/pesawat.jpg')` }}
    >
      <Container maxWidth="sm" sx={{ pt: 15, pb: 5 }}>
        <div className="box" style={{ padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>Edit Profile</h1>
          <Divider />
          <form className="px-3 py-4">
            <TextField
              fullWidth
              type="text"
              label="Full Name"
              id="fullWidth"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              fullWidth
              type="number"
              label="Phone Number"
              id="fullWidth"
              margin="normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value.substring(0, 13))}
            />

            <FormControl sx={{ width: 200 }} margin="dense">
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                labelId="gender"
                id="fullWidth"
                value={gender}
                label="Gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
            <div className="flexbutton">
              <Button
                variant="contained"
                color="secondary"
                sx={{ mx: 0.2, width: "50vw" }}
                onClick={() => navigate("/buyer-profile")}
              >
                <MdCancel className="proficon" style={{ fontSize: "16px" }} />{" "}
                Cancel
              </Button>

              <Button
                disabled={
                  user?.name === name &&
                  user?.gender === gender &&
                  user?.phone === phone
                }
                variant="contained"
                sx={{ mx: 0.2, width: "50vw" }}
                onClick={handleSubmit}
              >
                <FaSave className="proficon" />
                Save
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default FormEdit;
