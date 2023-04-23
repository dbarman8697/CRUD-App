import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("batch");
  const initialOrder = searchParams.get("order");
  const initialPage = searchParams.get("page");
  const [batch, setBatch] = useState(initialState || []);
  const [order, setOrder] = useState(initialOrder || "");
  const [page, setPage] = useState(+initialPage || 1);

  const handleBatch = (e) => {
    const newBatch = [...batch];
    const value = e.target.value;
    if (newBatch.includes(value)) {
      newBatch.splice(newBatch.indexOf(value), 1);
    } else {
      newBatch.push(value);
    }
    setBatch(newBatch);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    console.log(value);
    setOrder(value);
  };

  const handlePage = (value) => {
    setPage((prev) => {
      if (prev + value === 0) {
        return prev;
      }
      return prev + value;
    });
  };

  useEffect(() => {
    const params = {
      batch,
      page,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [batch, order, page]);
  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input
          data-testid="batch-web101"
          type="checkbox"
          value={"WEB101"}
          onChange={handleBatch}
          checked={batch.includes("WEB101")}
        />
        <label>WEB-101</label>
        <br />
        <br />
        <input
          data-testid="batch-js201"
          type="checkbox"
          value={"JS201"}
          onChange={handleBatch}
          checked={batch.includes("JS201")}
        />
        <label>JS-201</label>
        <br />
        <br />
        <input
          data-testid="batch-rct101"
          type="checkbox"
          value={"RCT101"}
          onChange={handleBatch}
          checked={batch.includes("RCT101")}
        />
        <label>RCT101</label>
        <br />
        <br />
        <input
          data-testid="batch-rct211"
          type="checkbox"
          value={"RCT211"}
          onChange={handleBatch}
          checked={batch.includes("RCT211")}
        />
        <label>RCT211</label>
        <br />
        <br />
        <input
          data-testid="batch-nxm101"
          type="checkbox"
          value={"NXM101"}
          onChange={handleBatch}
          checked={batch.includes("NXM101")}
        />
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button
          data-testid="page-prev"
          onClick={() => {
            handlePage(-1);
          }}
        >
          Previous
        </button>
        <button
          data-testid="page-next"
          onClick={() => {
            handlePage(1);
          }}
        >
          Next
        </button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
