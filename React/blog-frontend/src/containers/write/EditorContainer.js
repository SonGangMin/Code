import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { changeField } from "../../modules/write";
import { initialize } from "../../modules/write";
import Editor from "../../components/write/Editor";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
