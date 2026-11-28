Feature: Healthcheck de Juice Shop
  Como equipo de QA
  Quiero saber si la aplicación está en pie
  Para no lanzar pruebas contra un servicio caído

  Scenario: La aplicación responde
    Given Cesar abre Juice Shop
    Then Cesar ve la tienda cargada
