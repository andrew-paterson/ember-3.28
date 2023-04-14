import Component from '@glimmer/component';
import { action } from '@ember/object';
import { Changeset } from 'ember-changeset';

export default class TestComponent extends Component {
  @action
  test() {
    let user = { age: 21, address: { zipCode: '10001' } };
    let changeset = Changeset(user);
    let allowed = ['name', 'address.country'];
    console.log(`changeset.set('name', 'Jim Bob');`);
    changeset.set('name', 'Jim Bob');
    console.log(`changeset.set('address.country', 'United States');`);
    changeset.set('address.country', 'United States');
    console.log(`changeset.set('unwantedProp', 'foo');`);
    changeset.set('unwantedProp', 'foo');
    console.log(`changeset.set('address.unwantedProp', 123);`);
    changeset.set('address.unwantedProp', 123);
    console.log(`changeset.get('name // ${changeset.get('name')}`);
    console.log(`changeset.get('address.country // ${changeset.get('address.country')}`);
    console.log(`changeset.get('unwantedProp')); // ${changeset.get('unwantedProp')}`);
    console.log(`changeset.get('address.unwantedProp // ${changeset.get('address.unwantedProp')}`);
    changeset.cast(allowed); // returns changeset
    console.log(`>>>> changeset.cast([${allowed}])`);
    console.log(`changeset.get('name // ${changeset.get('name')}`);
    console.log(`changeset.get('address.country // ${changeset.get('address.country')}`);
    console.log(`changeset.get('unwantedProp')); // ${changeset.get('unwantedProp')}`);
    console.log(`changeset.get('another.unwantedProp // ${changeset.get('another.unwantedProp')}`);
    console.log(changeset.get('another.unwantedProp')); // undefined
  }
}
