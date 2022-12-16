// import { useState } from 'react';
// import {
//   Options, MenuOptions,

// } from '../styles';

// function NotificationsCard(element, handleClose, indx) {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [select, setSelect] = useState(null);
//   // type  selected element
//   const [type, setType] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//     setSelect(event.currentTarget.getAttribute('id'));
//     setType(event.currentTarget.getAttribute('catorige'));
//   };

//   return (
//     <MenuOptions
//       data-testid="options"
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'right',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={indx}
//       anchorEl={anchorEl}
//       open={open}
//       onClose={handleClose}
//     >
//       <Options
//         onClick={() => { handleClose(element._id); }}
//       >
//         {' '}
//         {element._id}
//         Hide this notification
//       </Options>
//     </MenuOptions>
//   );
// }

// export default NotificationsCard;
