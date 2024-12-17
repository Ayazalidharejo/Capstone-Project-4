import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function Drawerpage(props) {
  const { opendraw, toggleDrawer } = props;
  const { cartitems } = useSelector((state) => state.Cart);

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <Divider />
      <Typography
        variant="h4"
        sx={{
          py: 2,
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
          borderBottom: '1px solid #ddd',
        }}
      >
        Cart Items
      </Typography>
    </Box>
  );

  return (
    <div className="d-flex align-items-center">
      <Drawer open={opendraw} onClose={toggleDrawer(false)}>
        {DrawerList}

        {cartitems?.length > 0 ? (
          cartitems?.map((item, index) => (
            <Grid
              container
              key={index}
              sx={{
                py: 2,
                px: 2,
                borderBottom: '1px solid #ddd',
                alignItems: 'center',
                gap: 2,
              }}
            >
              {/* Image Section */}
              <Grid item xs={3} sx={{ textAlign: 'center' }}>
                <img
                  src={item?.strCategoryThumb || item?.strMealThumb}
                  alt={item?.strCategory || ''}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </Grid>

              {/* Item Details */}
              <Grid item xs={3}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: '#333', mb: 1 }}
                >
                  {item?.strCategory || ''}
                </Typography>
                <Typography className='pe-5'
                  variant="body2"
                  sx={{
                    color: '#555',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item?.strMeal || 'Meal Name'}
                </Typography>
              </Grid>

              {/* Action Buttons */}
              <Grid
                item
                xs={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ minWidth: '30px', fontSize: '0.8rem' }}
                >
                  +
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ minWidth: '30px', fontSize: '0.8rem' }}
                >
                  -
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  sx={{ minWidth: '60px', fontSize: '0.8rem' }}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          ))
        ) : (
          <Typography
            sx={{
              textAlign: 'center',
              py: 4,
              color: '#999',
              fontSize: '1rem',
            }}
          >
            No items in the cart
          </Typography>
        )}
      </Drawer>
    </div>
  );
}

export default Drawerpage;
