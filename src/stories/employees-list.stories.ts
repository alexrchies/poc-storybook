// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { EmployeesListComponent } from 'src/app/employees-list/employees-list.component';

import { APP_BASE_HREF } from '@angular/common';

// Solves the problem "NullInjectorError: No provider for HttpClient!"
import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular';
import { RouterModule } from '@angular/router';


export default {
  title: 'Components/Employees List',
  component: EmployeesListComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        RouterModule.forRoot([], { useHash: true }),
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
  ]
} as Meta

const Template: Story<EmployeesListComponent> = (args: EmployeesListComponent) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {};
