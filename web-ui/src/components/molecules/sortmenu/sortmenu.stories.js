import React from 'react';
import {action} from "@storybook/addon-actions";
import SortMenu from "./sortmenu.js";

export default {title: "Sort menu"};

export const sortMenu = () => (
    <SortMenu
        handleSortByNameAsc={action("Tasks are sorted by name in the ascending order")}
        handleSortByNameDesc={action("Tasks are sorted by name in the descending order")}
        handleSortByDateAsc={action("Tasks are sorted by date in the ascending order")}
        handleSortByDateDesc={action("Tasks are sorted by date in the descending order")}
    />
);