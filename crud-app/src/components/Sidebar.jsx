import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const initialGender = serachParams.getAll("gender");
  const [gender, setGender] = useState(initialGender || []);

  const initialCategory = serachParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);

  const initialOrder = serachParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

  const initialPage = serachParams.getAll("page");
  const [page, setPage] = useState(+initialPage || 1);

  //   console.log(serachParams.getAll("gender"));

  useEffect(() => {
    let params = {
      gender,
      category,
    };
    order && (params.order = order);

    setSearchParams(params);
  }, [gender, category, order]);

  useEffect(() => {
    let params = {
      page,
      _limit: 2,
    };
    setSearchParams(params);
  }, [page]);

  const handlePage = (value) => {
    setPage((prev) => {
      if (prev + value === 0) {
        return prev;
      }

      return prev + value;
    });
  };

  //http://localhost:3000/?gender=Men&gender=Women&gender=Kids //for this

  const handleGender = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.checked);
    const { value } = e.target;
    let newGender = [...gender];

    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
    console.log(gender);
  };

  const handleCategory = (e) => {
    const { value } = e.target;

    let newCategory = [...category];

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
    console.log(category);
  };

  const handleSort = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  return (
    <div>
      <h3>Filter by Gender</h3>
      <div>
        <input
          type="checkbox"
          value={"Men"}
          onChange={handleGender}
          checked={gender.includes("Men")}
        />
        <label>Men</label>
      </div>

      <div>
        <input
          type="checkbox"
          value={"Women"}
          onChange={handleGender}
          checked={gender.includes("Women")}
        />
        <label>Women</label>
      </div>

      <div>
        <input
          type="checkbox"
          value={"Kids"}
          onChange={handleGender}
          checked={gender.includes("Kids")}
        />
        <label>Kids</label>
      </div>

      <br />

      <h3>Filter by Category</h3>
      <div>
        <input
          type="checkbox"
          value={"top-wear"}
          onChange={handleCategory}
          checked={category.includes("top-wear")}
        />
        <label>Top Wear</label>
      </div>

      <div>
        <input
          type="checkbox"
          value={"bottom-wear"}
          onChange={handleCategory}
          checked={category.includes("bottom-wear")}
        />
        <label>Bottom Wear</label>
      </div>

      <div>
        <input
          type="checkbox"
          value={"shoes"}
          onChange={handleCategory}
          checked={category.includes("shoes")}
        />
        <label>Shoes</label>
      </div>

      <br />

      <h3>Sort by Price</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          name="order"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Low Price</label>
        <input
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>High Price</label>
      </div>

      <br />
      <br />
      <br />
      <br />
      <DIV>
        <h3 data-testid="page-number">Page No. {page}</h3>
        <button
          data-testid="previous-page"
          onClick={() => {
            handlePage(-1);
          }}
        >
          Previous
        </button>
        <br />
        <br />
        <button
          data-testid="next-page"
          onClick={() => {
            handlePage(1);
          }}
        >
          Next
        </button>
      </DIV>
    </div>
  );
};

export default Sidebar;

const DIV = styled.div`
  width: 100%;
  border-right: 1px solid gray;

  button {
    border: none;
    width: 100px;
    height: 40px;
    background-color: gray;
  }
`;
