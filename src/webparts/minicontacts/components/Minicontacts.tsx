import * as React from 'react';
import styles from './Minicontacts.module.scss';
import { IMinicontactsProps } from './IMinicontactsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';

export class ContactCards extends React.Component<any, any>{
  public render() {
    return (
      <div>
        <div className="ms-Grid">
          <div className="ms-Grid-row">
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
      <div className={styles.minicontacts}>
        <div className={styles.container}>
          <h1>Mini Contacts</h1>
          <ContactCards />
        </div>
      </div>
    );
  }
}
