import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { Addtocart } from "../../Slices/Addtocart/Addtocart";
import { Delete } from "../../Slices/Favirate";

function TemporaryDrawer(props) {
  const { handleDrawerTogglee, isDrawerOpen } = props;
  const { Favitaes } = useSelector((state) => state.Favirate);
  const usedispach = useDispatch();

  // State for the dialog, selected item, and form data
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    cityName: "",
    postAddress: "",
  });
  const [errors, setErrors] = useState({});

  // Handle dialog open/close
  const handleOpenConfirmModal = (item) => {
    setSelectedItem(item);
    setOpenConfirmModal(true);
  };
  const handleCancelAddToCart = () => {
    setOpenConfirmModal(false);
    setSelectedItem(null);
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: value.trim() ? "" : "This field is required" });
  };

  // Handle form submission
  const handleSubmit = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    // Dispatch Add to Cart action
    usedispach(Addtocart({ ...selectedItem, ...formData }));

    console.log("Added to cart successfully", selectedItem);
    setOpenConfirmModal(false);
    setFormData({
      fullName: "",
      phoneNumber: "",
      cityName: "",
      postAddress: "",
    });
  };

  return (
    <div>
      <Drawer open={isDrawerOpen} onClose={handleDrawerTogglee(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerTogglee(false)}>
          <Divider />
        </Box>
        <Typography className="text-center mt-3">Favorite</Typography>

        {Favitaes?.map((item) => (
          <Box key={item?.id} className="d-flex align-items-center">
            <img
              className="my-2 mx-2"
              style={{ width: "80px" }}
              src={item?.strMealThumb}
              alt={item?.strMeal}
            />
            <Typography>
              {item?.strMeal?.length > 10 ? `${item?.strMeal.slice(0, 10)}...` : item?.strMeal}
            </Typography>
            <ShoppingCartIcon onClick={() => handleOpenConfirmModal(item)} />
            <DeleteIcon
              style={{ cursor: "pointer" }}
              onClick={() => usedispach(Delete(item))}
            />
          </Box>
        ))}
      </Drawer>

      {/* Form Dialog */}
      <Dialog open={openConfirmModal} onClose={handleCancelAddToCart}>
        <Card sx={{ maxWidth: 400 }}>
          <CardContent>
            <Typography variant="h6">Please provide your details to proceed:</Typography>
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}
            >
              <TextField
                label="Full Name"
                name="fullName"
                variant="outlined"
                fullWidth
                required
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
              />
              <TextField
                label="Phone Number"
                name="phoneNumber"
                variant="outlined"
                fullWidth
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />
              <TextField
                label="City Name"
                name="cityName"
                variant="outlined"
                fullWidth
                required
                value={formData.cityName}
                onChange={handleChange}
                error={!!errors.cityName}
                helperText={errors.cityName}
              />
              <TextField
                label="Post Address"
                name="postAddress"
                variant="outlined"
                fullWidth
                required
                value={formData.postAddress}
                onChange={handleChange}
                error={!!errors.postAddress}
                helperText={errors.postAddress}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  onClick={handleCancelAddToCart}
                  style={{ backgroundColor: "#e21b70" }}
                  variant="contained"
                  color="secondary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  style={{ backgroundColor: "#e21b70" }}
                  variant="contained"
                  color="primary"
                >
                  Confirm
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Dialog>
    </div>
  );
}

export default TemporaryDrawer;
