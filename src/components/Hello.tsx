import React, { Component, useMemo, useState } from "react";
import Select from "react-select";

import {
  AddressBook,
  MathOperations,
  Trash,
  UserList,
  Voicemail,
} from "phosphor-react";
import { CDSSelect } from "@ciscodesignsystems/cds-react-select";
import { CDSButton } from "@ciscodesignsystems/cds-react-button";
import { faker } from "@faker-js/faker";
import { colourOptions } from "../data";


const initialData = () => {
  let d = [...Array(30)].map((v, i) => {
    const label = `test - ${faker.string.numeric()}`;
    const label2 = `test - ${faker.string.numeric()}`;
    return {
      name: `name_${faker.color.human()}`,
      options: [
        { value: label, label },
        { value: label2, label: label2 },
      ],
    };
  });
  return d;
};



const List = () => {
  const initialMemo = useMemo(initialData, []);
  const [value, setValue] = useState(initialData());
  const [formData, setFormData] = useState({});

  return (
    <div>
      <div
      style={{
        height: 225,
        overflow: "auto",
        border: "2px solid gray",
        padding: "1rem",
   
      }}
    >
      {value.map((v, i) => {
        return (
          <div key={i}>
            # {i} 
            <CDSSelect
              options={v.options}
              onChange={(item) => {
                console.log("change", item);
                setFormData({...formData,[i]: item})
                setValue(initialData());
              }}
              multiple={i === 10 || i === 20}
              placeholder={i === 10 || i === 20 ? "### multiple ###" : v.name}
            />
          </div>
        );
      })}
      
    </div>
    <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

const SelectList = () => {
  const initialMemo = useMemo(initialData, []);
  const [value, setValue] = useState(initialData());

  return (
    <div
      style={{
        height: 300,
        overflow: "auto",
        border: "2px solid gray",
        padding: "1rem",
      }}
    >
      {value.map((v, i) => {
        return (
          <div key={i}>
            #{i}
            <Select
              {...v}
              onChange={(v) => {
                console.log("change", v);
                setValue(initialData());
              }}
              isMulti={i === 10 || i === 20}
              placeholder={i === 10 || i === 20 ? "### multiple ###" : v.name}
            />
          </div>
        );
      })}
    </div>
  );
};




export interface HelloProps {
  message: string;
  children: any;
}

interface HelloState {}

export class Hello extends Component<HelloProps, HelloState> {
  public render(): JSX.Element {
    //const [count, setCount] = useState(0);
    //const { toasts, addToast } = useToast();
    
    return (
      <div className="hello" data-cds-theme="magnetic-light">
        <h1>{this.props.message}</h1>
        <div>{this.props.children}</div>

        <hr />
        <h2>Select</h2>
      <SelectList/>

        <hr />
        <h2>CDSSelect</h2>
       <List/>

        
       
        <br />
      
        

        
        <CDSButton>CDS Button</CDSButton>
        <CDSButton variant="secondary">CDS Button</CDSButton>
      </div>
    );
  }
}
