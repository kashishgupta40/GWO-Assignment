import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Checkbox, ListItemIcon } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const departmentData = [
    {
        "department": "customer_service",
        "sub_departments": [
          "support",
          "customer_success"
        ]
      },
      {
        "department": "design",
        "sub_departments": [
          "graphic_design",
          "product_design",
          "web_design"
        ]
      }
];

const DepartmentList = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const handleToggle = (name: string) => {
    setOpen((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  const handleSelect = (name: string, isSub: boolean = false) => {
    setSelected((prevState) => {
      const newState = { ...prevState, [name]: !prevState[name] };

      if (!isSub) {
        departmentData.find((dept) => dept.name === name)?.subDepartments.forEach((sub) => {
          newState[sub] = newState[name];
        });
      } else {
        const parent = departmentData.find((dept) => dept.subDepartments.includes(name))?.name;
        if (parent && departmentData.find((dept) => dept.name === parent)?.subDepartments.every((sub) => newState[sub])) {
          newState[parent] = true;
        } else if (parent) {
          newState[parent] = false;
        }
      }

      return newState;
    });
  };

  return (
    <List>
      {departmentData.map((dept) => (
        <React.Fragment key={dept.name}>
          <ListItem button onClick={() => handleToggle(dept.name)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={selected[dept.name] || false}
                tabIndex={-1}
                disableRipple
                onChange={() => handleSelect(dept.name)}
              />
            </ListItemIcon>
            <ListItemText primary={dept.name} />
            {open[dept.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[dept.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dept.subDepartments.map((sub) => (
                <ListItem key={sub} button sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={selected[sub] || false}
                      tabIndex={-1}
                      disableRipple
                      onChange={() => handleSelect(sub, true)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentList;
