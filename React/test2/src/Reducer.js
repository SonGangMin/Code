import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "SUCCESS":
      return { ...state, loading: false, data: action.data };
    case "ERROR":
      return { ...state, loading: false, error: action.data };
    default:
      throw new Error(`에러 => ${action.type}`);
  }
};

const MyComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const Loading = async () => {
      dispatch({ type: "LOADING" });

      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({ type: "SUCCESS", data: response.data });
      } catch (error) {
        dispatch({ type: "ERROR", data: error.message });
      }
    };

    Loading();
  }, []);

  const { loading, data, error } = state;

  const onClickName = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <ul>
            {data &&
              data.map((user) => (
                <li
                  key={user.id}
                  onClick={() => onClickName(user.id)}
                  style={{ cursor: "pointer" }}
                >
                  {user.name}
                </li>
              ))}
          </ul>
          {selectedUserId && (
            <div>
              <h2>{data[selectedUserId - 1].name}</h2>
              <p>Address:</p>
              <ul>
                <li>Street: {data[selectedUserId - 1].address.street}</li>
                <li>Suite: {data[selectedUserId - 1].address.suite}</li>
                <li>City: {data[selectedUserId - 1].address.city}</li>
                <li>Zipcode: {data[selectedUserId - 1].address.zipcode}</li>
                <li>
                  Geo: {data[selectedUserId - 1].address.geo.lat},{" "}
                  {data[selectedUserId - 1].address.geo.lng}
                </li>
              </ul>
              <p>Company: {data[selectedUserId - 1].company.name}</p>
              <p>Email: {data[selectedUserId - 1].email}</p>
              <p>Phone: {data[selectedUserId - 1].phone}</p>
              <p>Username: {data[selectedUserId - 1].username}</p>
              <p>Website: {data[selectedUserId - 1].website}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
