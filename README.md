# Welcome to is-cloud-function package

This is a package who returns a boolean if your code is running on a cloud function (AWS, Google, Azure) made by **[Sébastien Abbal](https://github.com/sebastien-abbal)**. It's working with node.js language and Typescript.

# 🚀 Get started

#### Installation

```
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
  - returnType: `provider` | `boolean` (default: `boolean`)

---

#### Example n°1: Get boolean if your project is running in cloud function of any provider listed above.

```typescript
import { isCloudFunction } from 'is-cloud-function';

if (isCloudFunction() === true) {
  // ... your logic ...
}

// Same like example above
if (isCloudFunction({ returnType: 'boolean' }) === true) {
  // ... your logic ...
}
```

---

#### Example n°2: Get provider type if your project is running in cloud function of any provider listed above.

```typescript
import { isCloudFunction } from 'is-cloud-function';

if (isCloudFunction({ returnType: 'provider' }) === 'AWS') {
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
