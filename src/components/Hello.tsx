import React, { Component } from "react";
import { useState } from "react";
import {
  AddressBook,
  MathOperations,
  Trash,
  UserList,
  Voicemail,
} from "phosphor-react";
import { CDSSelect } from "@ciscodesignsystems/cds-react-select";
import { CDSNotification } from "@ciscodesignsystems/cds-react-notification";
import { CDSButton } from "@ciscodesignsystems/cds-react-button";
import { CDSToaster, useToast } from "@ciscodesignsystems/cds-react-toaster";
import { CDSStatusIcon } from "@ciscodesignsystems/cds-react-icons";

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
      <div className="hello">
        <h1>{this.props.message}</h1>
        <div>{this.props.children}</div>

        <hr />
        <CDSNotification
          title="This is a warning"
          onClose={() => {}}
          status="warning"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde
          itaque, sapiente distinctio id nostrum eum illo asperiores, magnam
          blanditiis, provident laboriosam? Perferendis nihil reiciendis at
          quaerat nemo recusandae. Praesentium.
        </CDSNotification>

        <hr />
       
        <br />

        <CDSSelect
          icon={<Voicemail />}
          infoMessage=""
          label="Icon Select"
          multiple
          options={[
            {
              icon: <CDSStatusIcon status="info" />,
              label: "Option 1",
              value: "1",
            },
            {
              icon: <AddressBook size={18} />,
              label: "Option 2",
              value: "2",
            },
            {
              icon: <MathOperations size={18} />,
              label: "Option 3",
              value: "3",
            },
            {
              icon: <UserList size={18} />,
              label: "Option 4",
              value: "4",
            },
          ]}
          placeholder="Select an option"
        />
        <br />

        
        <CDSButton>CDS Button</CDSButton>
        <CDSButton variant="secondary">CDS Button</CDSButton>
      </div>
    );
  }
}
