import { useMemo } from "react";

interface IPaginationProps {
    totalCount: number;
    pageSize: number;
    siblingCount: number;
    currentPage: number;
}

export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
  }: IPaginationProps) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);

        if (currentPage < 1 || currentPage > totalPageCount) {
            return [];
        }

        const startPage = Math.max(1, currentPage - siblingCount);
        const endPage = Math.min(totalPageCount, currentPage + siblingCount);

        return [...Array(endPage - startPage + 1).keys()].map(
            (page) => startPage + page
        );
      
        
    }, [totalCount, pageSize, siblingCount, currentPage]);
  
    return paginationRange;
  };