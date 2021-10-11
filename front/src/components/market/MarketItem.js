import React from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import * as CompanyServer from "./MarketServer";

const MarketItem = ({
    id,
    description,
    category,
    amount,
    provider,
    date,
    listProducts,
}) => {
    const history = useHistory();

    const handleDelete = async (id) => {
        await CompanyServer.deleteProduct(id);
        listProducts();
    };

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{description}</td>
            <td>{category}</td>
            <td className="text-center">{amount}</td>
            <td>{provider}</td>
            <td>{date}</td>
            <td className="d-flex">
                <span
                    className="text-danger me-2 cursor-pointer"
                    onClick={() => id && handleDelete(id)}
                >
                    <i className="fa-solid fa-delete-left"></i>
                </span>
                <span
                    className=""
                    onClick={() => history.push(`/updateProduct/${id}`)}
                >
                    <i className="fa-solid fa-pen-to-square text-info"></i>
                </span>
            </td>
        </tr>
    );
};

export default MarketItem;
