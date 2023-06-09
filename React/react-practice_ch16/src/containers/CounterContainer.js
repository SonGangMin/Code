import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";
import { bindActionCreators } from "redux";

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <div>
//       <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//     </div>
//   );
// };

// // const mapStateToProps = (state) => ({
// //   number: state.counter.number,
// // });
// // const mapDispatchToProps = (dispatch) =>
// //   // ({
// //   //   increase: () => {
// //   //     // console.log("increase");
// //   //     dispatch(increase());
// //   //   },
// //   //   decrease: () => {
// //   //     // console.log("decrease");
// //   //     dispatch(decrease());
// //   //   },
// //   // })
// //   bindActionCreators(
// //     {
// //       increase,
// //       decrease,
// //     },
// //     dispatch
// //   );

// // export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// export default connect(
//   ({ counter }) => ({
//     number: counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   }
// )(CounterContainer);

//connect 대신 react-redux에서 제공하는 useSelector,useDispatch Hooks사용
const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter
      number={number}
      // onIncrease={() => dispatch(increase())}
      // onDecrease={() => dispatch(decrease())}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default CounterContainer;
