// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { EmployeeCreateComponent } from 'src/app/employee-create/employee-create.component';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

export default {
  title: 'Components/Employee Create',
  component: EmployeeCreateComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        EmployeeCreateComponent
      ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([], { useHash: true })
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
  ]
} as Meta

const Template: Story<EmployeeCreateComponent> = (args: EmployeeCreateComponent) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {
  employeeDetails: { id: '', name: '', email: '', phone: 0 }
};
