import React from "react";
import { Form, Icon, Input, Button, Dropdown, Menu } from "antd";

const { Search } = Input;

const SearchBase = props => {
  const { placeholder, onSearch, width } = props;
  return (
    <Search
      placeholder={placeholder}
      onSearch={onSearch}
      onPressEnter={e => onSearch(e.target.value)}
      style={{ width: `${width}px` }}
    />
  );
};

const LoginForm = props => {
  const { onSubmit } = props;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values);
      }
    });
  };

  const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
  const usernameError = isFieldTouched("username") && getFieldError("username");
  const passwordError = isFieldTouched("password") && getFieldError("password");
  return (
    <Form layout="vertical" onSubmit={handleSubmit}>
      <Form.Item
        validateStatus={usernameError ? "error" : ""}
        help={usernameError || ""}
      >
        {getFieldDecorator("username", {
          rules: [{ required: false, message: "Please input your username!" }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        )}
      </Form.Item>
      <Form.Item
        validateStatus={passwordError ? "error" : ""}
        help={passwordError || ""}
      >
        {getFieldDecorator("password", {
          rules: [{ required: false, message: "Please input your Password!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrapperForm = Form.create({ name: "LoginForm" })(LoginForm);

const ActionPullDown = props => {
  const { title, menuList, handleMenuClick } = props;
  const menuItems = menuList.map((menu, idx) => {
    return (
      <Menu.Item title={menu.title} key={idx}>
        {menu.title}
      </Menu.Item>
    );
  });
  const menu = (
    <Menu theme={"dark"} onClick={handleMenuClick}>
      {menuItems}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button ghost>
        {title} <Icon type="down" />
      </Button>
    </Dropdown>
  );
};

export { SearchBase as Search, WrapperForm as LoginForm, ActionPullDown };