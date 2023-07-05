// @ts-check
import { test, expect } from "@playwright/test";
import { subDays, format } from "date-fns";
test.describe("Example", () => {
  test("Happy path", async ({ page, browser }) => {
    await page.goto(
      "https://births-marriage-deaths.liverpool.gov.uk/Agenda/TelephoneRegistration/appointment.html?pg=cc2abe52-3e66-407b-8cbf-febc08a75219"
    );
    await expect(
      page.getByRole("heading", { name: "Register a Birth" })
    ).toBeVisible();

    await page.getByLabel("I confirm and accept the above.").check();

    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("Baby's date of birth").click();

    const fiveDaysAgo = format(subDays(new Date(), 5), "dd/MM/yyyy");

    await page.getByLabel("Baby's date of birth").fill(fiveDaysAgo);

    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("Baby was born in Liverpool").check();

    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("At home").check();

    await page.getByRole("button", { name: "Next" }).click();

    await page
      .getByLabel("Parents were married or in a civil partnership.")
      .check();

    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("I confirm I understand this").check();

    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("1 baby").check();

    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("Yes").check();

    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("Your first name (required)").click();

    await page.getByLabel("Your first name (required)").fill("Mother");

    await page.getByLabel("Your surname (required)").fill("Mother Surname");

    await page.getByLabel("Email (required)").fill("test@test.com");

    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("No").check();

    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("Informant's name (required)").fill("John Doe");

    await page
      .getByLabel("Informant's telephone number (required)")
      .fill("07489478909");

    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("No").check();

    await page.getByRole("button", { name: "Next" }).click();

    await page
      .getByRole("combobox", {
        name: "In which Office would you like to book the appointment?",
      })
      .selectOption("3");

    await page.getByRole("link", { name: "19" }).click();

    await page.getByRole("button", { name: "Exit" }).click();
  });
});
