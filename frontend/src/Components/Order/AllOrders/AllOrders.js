import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { createTheme } from '@mui/material/styles';

import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import DateObject from "react-date-object";



function createData(order_id, product_id, seller_id, date, pricing, status) {
    // let formated_date = new DateObject("2020 8 21 11 55 36 100 am");
    // let formated_date = "2020/08/21";
    return {
      order_id,
      product_id,
      seller_id,
      date,
      pricing,
      status
    };
  }
  
  const rows = [
    createData('A472U8370', '#2U8370', '@1309',"2020/08/21", 4233,"Delivered"),
    createData('A472U8371', '#2U8370', '@23090',"2020/08/21", 4239,"Cancelled"),
    createData('A472U8372', '#2U8370', '@3090',"2020/08/21", 6230,"Pending"),
    createData('A472U8373', '#2U8370', '@43090',"2020/08/21", 3239,"Delivered"),
    createData('A472U8374', '#2U8370', '@5309',"2020/08/21", 6235,"Pending"),
    createData('A472U8374', '#2U8370', '@5309',"2020/08/21", 6235,"Pending"),
    createData('A472U8374', '#2U8370', '@5309',"2020/08/21", 6235,"Pending"),
    createData('A472U8374', '#2U8370', '@5309',"2020/08/21", 6235,"Pending"),
    createData('A472U8374', '#2U8370', '@5309',"2020/08/21", 6235,"Pending"),
    createData('A472U8374', '#2U8370', '@5309',"2020/08/21", 6235,"Pending"),
    createData('A472U8374', '#2U8370', '@5309',"2020/08/21", 6235,"Pending"),
    createData('A472U8374', '#2U8370', '@5309',"2020/08/21", 6235,"Pending"),
    createData('A472U8374', '#2U8370', '@5309',"2020/08/21", 6235,"Pending"),
    createData('A472U8374', '#2U8370', '@5309',"2020/08/21", 6235,"Pending"),
    
  ];

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    {
      id: 'order_id',
      numeric: false,
      disablePadding: true,
      label: 'Order Id',
    },
    {
      id: 'product_id',
      numeric: true,
      disablePadding: false,
      label: 'Product Id',
    },
    {
      id: 'seller_id',
      numeric: true,
      disablePadding: false,
      label: 'Seller Id',
    },
    {
      id: 'date',
      numeric: true,
      disablePadding: false,
      label: 'Date',
    },
    // {
    //   id: 'formatted_date',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Formated Date',
    // },
    {
      id: 'pricing',
      numeric: true,
      disablePadding: false,
      label: 'Pricing',
    },
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: 'Status',
    },
  ];
//   const headCells = [
//     {
//       id: 'name',
//       numeric: false,
//       disablePadding: true,
//       label: 'Dessert (100g serving)',
//     },
//     {
//       id: 'calories',
//       numeric: true,
//       disablePadding: false,
//       label: 'Calories',
//     },
//     {
//       id: 'fat',
//       numeric: true,
//       disablePadding: false,
//       label: 'Fat (g)',
//     },
//     {
//       id: 'carbs',
//       numeric: true,
//       disablePadding: false,
//       label: 'Carbs (g)',
//     },
//     {
//       id: 'protein',
//       numeric: true,
//       disablePadding: false,
//       label: 'Protein (g)',
//     },
//   ];
    
  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {/* <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell> */}
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
            //   align={headCell.numeric ? 'left' : 'left'}
            //   padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  function EnhancedTableToolbar(props) {
    const { numSelected } = props;
  
    return (
      <Toolbar
        sx={{color: '#56B378'}}
        // sx={{
        //   pl: { sm: 2 },
        //   pr: { xs: 1, sm: 1 },
        //   ...(numSelected > 0 && {
        //     bgcolor: (theme) =>
        //       alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        //   }),
        // }}
      >
        {/* {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : ( */}
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Order List 
          </Typography>
        {/* )} */}
  
        {/* {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : ( */}
          <Tooltip title="Filter list">
            <IconButton >
              <Typography mr={1}>Filter</Typography>
              <FilterListIcon sx={{color:"#56B378"}} />
            </IconButton>
          </Tooltip>
        {/* )} */}
      </Toolbar>
    );
  }
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };
  
function AllOrders() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelected = rows.map((n) => n.name);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    };
  
    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
  
      setSelected(newSelected);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };
  
    const isSelected = (name) => selected.indexOf(name) !== -1;
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    return (
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;
  
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        {/* <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell> */}
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="normal"
                        >
                          {row.order_id}
                        </TableCell>
                        <TableCell align="left">{row.product_id}</TableCell>
                        <TableCell align="left">{row.seller_id}</TableCell>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">{row.pricing}</TableCell>
                        {row.status==="Delivered"?
                           <TableCell align="left" sx={{color:'green'}}>{row.status}</TableCell>
                           :row.status==="Pending"?
                            <TableCell align="left" sx={{color:'#FDA50F'}}>{row.status}</TableCell>
                            :<TableCell align="left" sx={{color:'#f94449'}}>{row.status}</TableCell>

                        }
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    );
  
}

export default AllOrders