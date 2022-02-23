# Welcome to is-cloud-function package

This is a package who returns a boolean if your code is running on a cloud function (AWS, Google, Azure) made by **[Sébastien Abbal](https://github.com/sebastien-abbal)**. It's working with node.js language and Typescript.

# 🚀 Get started

#### Installation

```
$ npm install is-cloud-function
// or
$ yarn add is-cloud-function
```

#### Example

```typescript
import { isCloudFunction } from 'is-cloud-function';

console.log(isCloudFunction());
```

# 👾 Usage

| Provider                                                                                                         | Enabled |  Type  |
| ---------------------------------------------------------------------------------------------------------------- | :-----: | :----: |
| [AWS Lambdas](https://aws.amazon.com/fr/lambda/)                                                                 |   ✅    |  AWS   |
| [Google cloud functions](https://cloud.google.com/functions)                                                     |   ✅    | GOOGLE |
| [Azure functions](https://azure.microsoft.com/en-us/services/functions/)                                         |   ✅    | AZURE  |
| [IBM Cloud Functions](https://cloud.ibm.com/functions/)                                                          |   ❌    |   -    |
| [Cloudflare workers](https://workers.cloudflare.com/)                                                            |   ❌    |   -    |
| [Apex](https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_functions_Function.htm) |   ❌    |   -    |

---

#### Configuration

You can manage a specific configuration to the `isCloudFunction` :

- **Config**
  - type: `PROVIDER` | `BOOLEAN` (default: `BOOLEAN`)

---

#### Example n°1: Get boolean if your project is running in cloud function of any provider listed above.

```typescript
import { isCloudFunction } from 'is-cloud-function';

if (isCloudFunction() === true) {
  // ... your logic ...
}

// Same like example above
if (isCloudFunction({ type: 'BOOLEAN' }) === true) {
  // ... your logic ...
}
```

---

#### Example n°2: Get provider type if your project is running in cloud function of any provider listed above.

```typescript
import { isCloudFunction } from 'is-cloud-function';

if (isCloudFunction({ type: 'PROVIDER' }) === 'AWS') {
  // ... your logic ...
}
```

---

#### Example n°3: Best practices

> ⚠️ Set the values from the enums represents a better practice than the "[magic variables](https://en.wikipedia.org/wiki/Magic_number_%28programming%29)".

```typescript
import { isCloudFunction, ICF_EnumConfigType } from 'is-cloud-function';

if (
  isCloudFunction({ type: ICF_EnumConfigType.PROVIDER }) ===
  ICF_EnumProviderType.AZURE
) {
  // ... your logic ...
}
```

# 🚦 Tests

To test all the app with jest (100% coverage), you need to run this command line:

```
$ yarn test
```

## License

This package is [MIT licensed](LICENSE.md).
