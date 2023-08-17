// import { Pagination } from 'antd';
// const Paginate = () => <Pagination defaultCurrent={1} total={50} />;
// export default Paginate;

import { Pagination } from "antd";
import { Steps } from "antd";
import { Cascader } from "antd";
const { SHOW_CHILD } = Cascader;
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
const description = "This is a description.";
const options = [
  {
    label: "Light",
    value: "light",
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: "Bamboo",
    value: "bamboo",
    children: [
      {
        label: "Little",
        value: "little",
        children: [
          {
            label: "Toy Fish",
            value: "fish",
          },
          {
            label: "Toy Cards",
            value: "cards",
          },
          {
            label: "Toy Bird",
            value: "bird",
          },
        ],
      },
    ],
  },
];
const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};

const showTotal = (total) => `Total ${total} items`;
const Paginate = () => {
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
      <br />
      <Steps
        current={1}
        items={[
          {
            title: "Finished",
            description,
          },
          {
            title: "In Progress",
            description,
            subTitle: "Left 00:00:08",
          },
          {
            title: "Waiting",
            description,
          },
        ]}
      />
      <Steps
        items={[
          {
            title: "Login",
            status: "finish",
            icon: <UserOutlined />,
          },
          {
            title: "Verification",
            status: "finish",
            icon: <SolutionOutlined />,
          },
          {
            title: "Pay",
            status: "process",
            icon: <LoadingOutlined />,
          },
          {
            title: "Done",
            status: "wait",
            icon: <SmileOutlined />,
          },
        ]}
      />
      <Cascader
        style={{
          width: "100%",
        }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ["bamboo", "little", "fish"],
          ["bamboo", "little", "cards"],
          ["bamboo", "little", "bird"],
        ]}
      />
    </>
  );
};
export default Paginate;
