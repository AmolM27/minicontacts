import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MinicontactsWebPartStrings';
import Minicontacts from './components/Minicontacts';
import { IMinicontactsProps } from './components/IMinicontactsProps';

export interface IMinicontactsWebPartProps {
  description: string;
}

export default class MinicontactsWebPart extends BaseClientSideWebPart<IMinicontactsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMinicontactsProps > = React.createElement(
      Minicontacts,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
