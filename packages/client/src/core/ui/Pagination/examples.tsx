import React, { useState } from "react";
import { Pagination } from "./Pagination";

export default {
    component: Pagination,
    title: "Pagination",
};

const PaginationStory = () => {
    const [page, setPage] = useState(1);

    return (
        <Pagination
            page={page}
            total={20}
            itemsPerPage={6}
            onPageChange={setPage}
            renderItem={(i) => <div key={i}>{i}</div>}
        />
    );
};

export const Default = () => {
    return (
        <div style={{ height: "500px" }}>
            <PaginationStory />
        </div>
    );
};
