import * as React from 'react';
import styles from './Minicontacts.module.scss';
import { IMinicontactsProps } from './IMinicontactsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import {SPHttpClient, ISPHttpClientConfiguration, SPHttpClientResponse} from '@microsoft/sp-http';

export class ContactCards extends React.Component<any, any>{
  public render() {
    return (
      <div>
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <h2>{this.props.header}</h2>
            <div className="ms-Grid-col ms-sm12 ms-md3">
              <Persona
                imageUrl='./images/persona-female.png'
                imageInitials='AL'
                primaryText='Annie Liundqvist'
                secondaryText='Software Engineer'
                tertiaryText='In a meeting'
                optionalText='513-20-79'
              />
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md3">
              <Persona
                imageUrl='./images/persona-female.png'
                imageInitials='AL'
                primaryText='Annie Liundqvist'
                secondaryText='Software Engineer'
                tertiaryText='In a meeting'
                optionalText='513-20-79'
              />
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md3">
              <Persona
                imageUrl='./images/persona-female.png'
                imageInitials='AL'
                primaryText='Annie Liundqvist'
                secondaryText='Software Engineer'
                tertiaryText='In a meeting'
                optionalText='513-20-79'
              />
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md3">
              <Persona
                imageUrl='./images/persona-female.png'
                imageInitials='AL'
                primaryText='Annie Liundqvist'
                secondaryText='Software Engineer'
                tertiaryText='In a meeting'
                optionalText='513-20-79'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default class Minicontacts extends React.Component<IMinicontactsProps, {}> {
  public render(): React.ReactElement<IMinicontactsProps> {
    return (
      <div>
          <ContactCards header={this.props.title}/>
      </div>
    );
  }

  private _getContacts() {
    var uri = "https://dentsuaegistest.sharepoint.com/sites/dev/_api/web/lists/getbytitle('Key Contacts')/items?$expand=Contact/Id&$select=Title,Contact/Id,Contact/Email,Contact/FirstName,Contact/LastName,Contact/Title,Contact/WorkPhone,Contact/Department,Contact/JobTitle"
    this._getSPdata(uri)
      .then(data => {
        console.log('got data in biz layer ' + data);
        this.setState({ contacts: data });
      })
  }

  private _getSPdata(uri): Promise<string[]> {
    return this.props.client.get(uri, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      }).then(data => {
        return data.value;
      });
  }
}
