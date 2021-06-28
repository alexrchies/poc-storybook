// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { EmployeeEditComponent } from 'src/app/employee-edit/employee-edit.component';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

export default {
  title: 'Components/Employee Edit',
  component: EmployeeEditComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        EmployeeEditComponent
      ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([], { useHash: true })
      ]
    })
  ]
} as Meta

const Template: Story<EmployeeEditComponent> = (args: EmployeeEditComponent) => ({
  props: args
})

export const Default = Template.bind({});
Default.args = {
  id: '1'
}
