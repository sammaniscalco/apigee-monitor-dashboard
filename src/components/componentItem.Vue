<template>
  <b-card class="mb-2" no-body>
    <b-card-header class="font-weight-bold">{{component.name}}</b-card-header>
    <b-card-body>
      <b-card-text>
        {{component.id}} :{{component.port}}
        <hr />
        {{component.description}}
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "componentItem",
  props: ["component"]
};
</script>