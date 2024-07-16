import React, { useState, useContext } from "react";
import page_data from '../pageData.json';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [showDial, setShowDial] = useState(false);
    const [dialContent, setDialContent] = useState('');
    const [dialPosition, setDialPosition] = useState(0);
    const [showAddOrEditMed, setShowAddOrEditMed] = useState(false);
    const [AddOrEdit, setAddOrEdit] = useState('');

    const [pathname, setPathname] = useState('/');
    const [page_head, setPage_head] = useState(page_data['/'].page);
    const [page_load, setPage_load] = useState(page_data['/']);

    const [showOutStock, setShowOutStock] = useState(false);
    const [showExpired, setShowExpired] = useState(false);
    const [showStock, setShowStock] = useState(false);
    const [showAddStock, setShowAddStock] = useState(false);

    const showOutStockWidget = () => {
        setPathname('/out-stock');
        setPage_head(page_data['/out-stock'].page);
        setPage_load(page_data['/out-stock']);
    };

    const showExpiredWidget = () => {
        setPathname('/expired');
        setPage_head(page_data['/expired'].page);
        setPage_load(page_data['/expired']);
    };

    const dial = {
        med: [
            ['Add Medicine', setShowAddOrEditMed],
            ['Out-Stock', showOutStockWidget],
            ['Expired', showExpiredWidget]
        ],
        stock: [
            ['Add Stock', setShowAddStock]
        ]
    };

    return (
        <AppContext.Provider value={{
            showDial, setShowDial,
            dialContent, setDialContent,
            dialPosition, setDialPosition,
            showAddOrEditMed, setShowAddOrEditMed,
            AddOrEdit, setAddOrEdit,
            showOutStock, setShowOutStock,
            showExpired, setShowExpired,
            showStock, setShowStock,
            showAddStock, setShowAddStock,
            pathname, setPathname,
            page_head, setPage_head,
            page_load, setPage_load,
            dial
        }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
