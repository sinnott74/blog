import React, { FC, useCallback } from "react";
import { scrollTop } from "../../common/utils/scrollTo";
import { Button } from "../Button/Button";
import { ChevronLeft, ChevronRight } from "../Icons";
import { Inline, Stack, Tiles } from "../Layout";
import { Responsive } from "../Layout/util";
import { Text } from "../Typography/Typography";

interface PaginationProps extends PaginationSelectorProps {
    columns?: Responsive<number>;
    renderItem: (index: number) => JSX.Element;
}

export const Pagination: FC<PaginationProps> = ({
    columns = 1,
    page,
    total,
    itemsPerPage = 6,
    onPageChange,
    renderItem,
}) => {
    const handlePageChange = useCallback(
        (newPage: number) => {
            if (newPage === page) {
                return;
            }
            scrollTop();
            onPageChange(newPage);
        },
        [onPageChange, page],
    );

    const items = Array.from({ length: itemsPerPage })
        .map((_, i) => {
            const index = (page - 1) * itemsPerPage + i;
            return index < total && renderItem(index);
        })
        .filter(Boolean);

    return (
        <Stack>
            <Tiles columns={columns}>{items}</Tiles>
            <PaginationSelector
                page={page}
                total={total}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
        </Stack>
    );
};

interface PaginationSelectorProps {
    page: number;
    total: number;
    itemsPerPage?: number;
    onPageChange: (page: number) => void;
}

const PaginationSelector = ({
    page,
    total,
    itemsPerPage = 6,
    onPageChange,
}: PaginationSelectorProps) => {
    const numPages = Math.ceil(total / itemsPerPage) || 1;

    const PageButtons = Array.from({ length: numPages }).map((_, i) => {
        const isCurrent = page === i + 1;
        return (
            <Button
                type="icon"
                key={i + 1}
                palette={isCurrent ? "primary" : undefined}
                selected={isCurrent}
                onClick={() => onPageChange(i + 1)}
            >
                <Text>{i + 1}</Text>
            </Button>
        );
    });

    return (
        <Inline align="center">
            <Button
                aria-label="Previous page"
                type="icon"
                disabled={page <= 1}
                onClick={() => onPageChange(page - 1)}
            >
                <ChevronLeft />
            </Button>
            {PageButtons}
            <Button
                aria-label="Next page"
                type="icon"
                disabled={page >= numPages}
                onClick={() => onPageChange(page + 1)}
            >
                <ChevronRight />
            </Button>
        </Inline>
    );
};
